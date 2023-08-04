import mysql.connector

class MysqlDb:
    
    def __init__(self,host,user,pwd,db):
        self.user = user
        self.host = host
        self.password = pwd
        self.database = db 
    
    def get_conn(self):
        mysql_conn = mysql.connector.connect(
            user=self.user,
            password=self.password,
            host=self.host,
            database=self.database
        )
        
        if mysql_conn is None:
            print("Error en la conexión a bd")
            
        return mysql_conn
    
# conn = MysqlDb('localhost','root','','db_factura_g21')
# db = conn.get_conn()
# cursor = db.cursor()
# cursor.execute('select * from tbl_producto')
# data = cursor.fetchall()
# print(data)
# cursor.close()