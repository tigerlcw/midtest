
var c = 0;

var img_all_1 = [];
img_all_1[0]="banner_image1_1";
img_all_1[1]="banner_image2_1";
img_all_1[2]="banner_image3_1";

function banner_show_1(n)
{   
    if(n==0)
    {
        if(c>0)
        {
            c=c-1;
            banner_slide_1(c);
        }
        else
        {
            c=img_all_1.length-1;
            banner_slide_1(c);
        }
    }
    if(n==1)
    {
        if(c<img_all_1.length-1)
        {
            c=c+1;
            banner_slide_1(c);
        }
        else{
            c=0;
            banner_slide_1(c);
        }
    }
}

function banner_slide_1(count) 
{
    for(var i=0;i<=img_all_1.length-1;i++)
    {
        if(count!=i)
        {
            document.getElementById(img_all_1[i]).style.width = "0%";
        }
    }
    document.getElementById(img_all_1[count]).style.width = "100%";
}