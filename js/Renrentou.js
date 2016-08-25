/**
 * Created by hxsd on 2016/8/11.
 */
//进度条
function progress(id,percentage){
    var barWidth=percentage*178+"px";
    $(id).css("width",barWidth);
    var cont=percentage*100+"%";
    $(".percentage p").html(cont);
}
//星级评分
function star(id,number){
    $(id).find("li:gt("+(number-1)+")").hide();
}

//页码 {1.当前第几页, 2.每页显示多少条， 3.一共多少条}
function page(id,now,number,sum){
    $(id).html("<button class='lastPage'>上一页</button><ul></ul><button class='nextPage'>下一页</button>");
    var n=Math.floor(sum/number);
    var ul=$(id).find("ul");
    for(var i=1;i<n;i++){
        ul.append("<li>"+i+"</li>");
    }
    if(n>6){
        ul.find("li:gt(5)").hide();
        ul.append("<li>...</li><li>"+n+"</li>");
    }
    $(id).find("li").eq(now).css({"background":"#db4f33","color":"#fff"});
}