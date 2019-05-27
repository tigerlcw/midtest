
var c = 0;

var img_all_2 = [];
img_all_2[0]="banner_image1_2";
img_all_2[1]="banner_image2_2";
img_all_2[2]="banner_image3_2";

function banner_show_2(n)
{   
    if(n==0)
    {
        if(c>0)
        {
            c=c-1;
            banner_slide_2(c);
        }
        else
        {
            c=img_all_2.length-1;
            banner_slide_2(c);
        }
    }
    if(n==1)
    {
        if(c<img_all_2.length-1)
        {
            c=c+1;
            banner_slide_2(c);
        }
        else{
            c=0;
            banner_slide_2(c);
        }
    }
}

function banner_slide_2(count) 
{
    for(var i=0;i<=img_all_2.length-1;i++)
    {
        if(count!=i)
        {
            document.getElementById(img_all_2[i]).style.width = "0%";
        }
    }
    document.getElementById(img_all_2[count]).style.width = "100%";
}