<%
	response.expires=-1
	dim a(3)
	a(0)="力量：26(+3.2)	攻击力：53 - 69	敏捷 11(+0.9)		攻速：1.53 + 11%	智力：13(+2.1)		护甲：0.54"
	a(1)="力量：15 + 1.9	攻击力：48 - 54	敏捷：22 + 2.8		攻速：1.39		智力：16 + 1.9		护甲：3.1"
	a(2)="力量：17 + 1.9	攻击力：49 - 57	敏捷：20 + 2.8		攻速：1.42		智力：17 + 1.7		护甲：1.9"
	a(3)="力量：24 + 3		攻击力：61 - 67	敏捷：9 + 0.9		攻速：1.56		智力：14+ 1.6		护甲：0"
	if request.querystring("q")=="doom" then
	response.write(a(0))
	if Request.querystring("q")=="luna" then
	response.write(a(1))
	if Request.Querystring("q")=="pom"  then
	response.write(a(2))
	if request.querystring("q")=="tiny" then
	response.write(a(3))
%>