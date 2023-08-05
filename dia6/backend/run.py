from flask import Flask,request,jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MSYQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'db_todolist_g21'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():
    context = {
        'message':'apirest activo'
    }
    return jsonify(context)

@app.route('/tarea')
def get_tarea():
    cursor = mysql.connection.cursor()
    cursor.execute("select text,completed from tbl_tarea")
    data = cursor.fetchall()
    cursor.close()
    
    return jsonify(data)

@app.route('/tarea',methods=['POST'])
def set_tarea():
    text = request.json['text']
    completed = request.json['completed']
    cursor = mysql.connection.cursor()
    sql_insert = """
                   insert into tbl_tarea(text,completed)
                   values('"""+ text +"""',"""+ str(completed) +""")
                   """
    print(sql_insert)
    cursor.execute(sql_insert)
    mysql.connection.commit()
    cursor.close()
    
    context = {
        'message':'registro exitoso'
    }
    
    return jsonify(context)


if __name__ == '__main__':
    app.run(debug=True)