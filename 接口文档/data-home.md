接口描述
	请求地址  /data/home
	请求方式  get
	请求格式  application/json
	....
请求数据
	query数据
		num 数量
	data数据
		color 样式
响应数据
	{	
		ad: Array   广告商品
		[{
			title: string,  商品名称
			description: string 商品描述
			...
		}]
	}