
var c = 0;

var img_all_3 = [];
img_all_3[0]="banner_image1_3";
img_all_3[1]="banner_image2_3";
img_all_3[2]="banner_image3_3";

function banner_show_3(n)
{   
    if(n==0)
    {
        if(c>0)
        {
            c=c-1;
            banner_slide_3(c);
        }
        else
        {
            c=img_all_3.length-1;
            banner_slide_3(c);
        }
    }
    if(n==1)
    {
        if(c<img_all_3.length-1)
        {
            c=c+1;
            banner_slide_3(c);
        }
        else{
            c=0;
            banner_slide_3(c);
        }
    }
}

function banner_slide_3(count) 
{
    for(var i=0;i<=img_all_3.length-1;i++)
    {
        if(count!=i)
        {
            document.getElementById(img_all_3[i]).style.width = "0%";
        }
    }
    document.getElementById(img_all_3[count]).style.width = "100%";
}