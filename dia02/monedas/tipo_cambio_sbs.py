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
            if(len(compra.get_text()) == 1):
                valor_compra = venta.get_text()
            else:
                valor_compra = compra.get_text()
                
            if(len(venta.get_text()) == 1):
                valor_venta = compra.get_text()
            else:
                valor_venta = venta.get_text()
            dic_moneda = {
                'moneda':moneda.get_text(),
                'compra':valor_compra,
                'venta':valor_venta
            }
            lista_monedas.append(dic_moneda)
        
        return lista_monedas
    