import requests
from bs4 import BeautifulSoup

url = requests.get('https://www.sbs.gob.pe/app/pp/SISTIP_PORTAL/Paginas/Publicacion/TipoCambioPromedio.aspx')

if(url.status_code == 200):
    html = BeautifulSoup(url.text,'html.parser')
    tipo_cambio = html.find('tr',{'id':'ctl00_cphContent_rgTipoCambio_ctl00__0'})
    print(tipo_cambio)
    compra = tipo_cambio.find('td',{'class':'APLI_fila2'})
    venta = tipo_cambio.find('td',{'class':'APLI_fila2'}).findNext('td')
    print("compra : " + compra.get_text())
    print("venta : " + venta.get_text())
else:
    print(str(url.status_code))