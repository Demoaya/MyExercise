<%
	response.expires=-1
	dim a(3)
	a(0)="������26(+3.2)	��������53 - 69	���� 11(+0.9)		���٣�1.53 + 11%	������13(+2.1)		���ף�0.54"
	a(1)="������15 + 1.9	��������48 - 54	���ݣ�22 + 2.8		���٣�1.39		������16 + 1.9		���ף�3.1"
	a(2)="������17 + 1.9	��������49 - 57	���ݣ�20 + 2.8		���٣�1.42		������17 + 1.7		���ף�1.9"
	a(3)="������24 + 3		��������61 - 67	���ݣ�9 + 0.9		���٣�1.56		������14+ 1.6		���ף�0"
	if request.querystring("q")=="doom" then
	response.write(a(0))
	if Request.querystring("q")=="luna" then
	response.write(a(1))
	if Request.Querystring("q")=="pom"  then
	response.write(a(2))
	if request.querystring("q")=="tiny" then
	response.write(a(3))
%>