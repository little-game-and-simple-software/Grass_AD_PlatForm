//用来控制广告展示的核心js
//图片所存在的域名
var ImageStoreUrl="https://littlegame.opvs.me/Grass_AD_PlatForm/Ads/"
var ImageAd
//初始化获得广告图像 需要优先运行 //废弃方法 
function getAdImageNode(){

ImageAd=document.getElementById("Ad")

if(ImageAd!=null)
{
	console.log("旧方法获取到图片节点")
//RandomAdShowTest()
}
else
{
	alert("错误不存在id为Ad的img标签")
}
}
//初始化获得广告图像 需要优先运行
function getAdImageNode(MyId){

ImageAd=document.getElementById(MyId)
console.log("节点Id"+MyId)
if(ImageAd!=null)
{
	console.log("新方法获取到图片节点")
	//如果获取到img标签，自动获取生成随机广告
	console.log("获取到img标签，自动生成随机广告")
	RandomAdShowTest()
}
else
{
	alert("错误新方法获取不到id为Ad的img标签")
}

}
//RandomAdShowTest()
function RandomAdShowTest()
{
	//默认随机生成0-1之间的数 *10之后范围变成0-10
	//floor方法是数学中的去尾法 去除小数结尾的数字 保留整数
	//从Main.js生成随机数 需要将随机数存入全局变量
	//打开新的广告页面时 加载完成 需要获得生成的随机数
	//根据随机数来选择如何显示对应的广告
	var FirstRandomNumber=Math.random()*5
	var ResultNumber=Math.floor(FirstRandomNumber)
	console.log(ResultNumber)
	console.log("测试随机数")
	
	if(ImageAd)
	{
		console.log("图片节点存在")
	}
	else
	{
		alert("图片节点不存在")
	}
	if(ResultNumber==1)
	{
	ImageAd.src=ImageStoreUrl+"小沙盒工作室.jpg"
	}
	else if(ResultNumber==2)
	{
	ImageAd.src=ImageStoreUrl+"/啤酒广告.webp"
	}
	else if(ResultNumber==3)
	{
	ImageAd.src=ImageStoreUrl+"/蛋糕广告.webp"
	}
	else if(ResultNumber==4)
	{
	ImageAd.src=ImageStoreUrl+"/玩科光电.jpg"
	}
}
//getAdImageNode()