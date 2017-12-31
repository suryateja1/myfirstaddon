
function male()
{
	browser.tabs.create({url:"https://www.flipkart.com/mens-clothing/tshirts/pr?sid=2oq,s9b,j9y&otracker=nmenu_sub_Men_0_T-Shirts"}); 
}
function female()
{
	browser.tabs.create({url:"https://www.flipkart.com/sarees/pr?sid=2oq,c1r,3pj,7od&otracker=nmenu_sub_Women_0_Sarees"}); 
}
document.addEventListener("click",(e)=>{
	if(e.target.id==="male")
	{
		male();
	}
	else
	{
		female();
	}
	
});