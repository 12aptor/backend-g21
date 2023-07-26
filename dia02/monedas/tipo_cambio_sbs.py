import requests
from bs4 import BeautifulSoup

class TipoCambioSbs:
    
    def __init__(self):
        self.url = requests.get('https://www.sbs.gob.pe/app/pp/SISTIP_PORTAL/Paginas/Publicacion/TipoCambioPromedio.aspx')
        
    def obtener(self):
        lista_monedas = []
        html = BeautifulSoup(self.url.text,'html.parser')
        for i in range(7):
            fila = html.find('tr',{'id':'ctl00_cphContent_rgTipoCambio_ctl00__'+str(i)})
            moneda = fila.find('td',{'class':'APLI_fila3'})
            compra = fila.find('td',{'class':'APLI_fila2'})
            venta = fila.find('td',{'class':'APLI_fila2'}).findNext('td')
            dic_moneda = {
                'moneda':moneda.get_text(),
                'compra':compra.get_text(),
                'venta':venta.get_text()
            }
            lista_monedas.append(dic_moneda)
        
        return lista_monedas
    