#!/usr/bin/env python

import cgi

import cgitb
cgitb.enable()

print "Content-type: text/html"
print

print "Thanks for filling out my form!"
print

form = cgi.FieldStorage()
if "my-dropdown" not in form:
    print "<H1>Error</H1>"
    print "Please select an option from the dropdown."

print form
print form['my-dropdown']

print "<br>"
