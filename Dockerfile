FROM httpd:2.4

RUN apt-get update && apt-get install -y python

COPY scripts/form-handler.py /usr/local/apache2/cgi-bin/
COPY httpd.conf conf/httpd.conf

RUN chmod a+x /usr/local/apache2/cgi-bin/form-handler.py