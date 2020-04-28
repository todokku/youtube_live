var amamiya;


$(function () {
    $("#acMenu dt").on("click", function () {
        $(this).next().slideToggle();
    });
});

$(function () {
    //オーバーレイとコンテンツの表示
    $(".modal-open").click(function () {
        $(this).blur(); //ボタンからフォーカスを外す
        if ($(".modal-overlay")[0]) return false; //新たにオーバーレイが追加されるのを防ぐ
        $("body").append('<div class="modal-overlay"></div>'); //オーバーレイ用のHTMLをbody内に追加
        $(".modal-overlay").fadeIn("slow"); //オーバーレイの表示
        $(".modal").fadeIn("slow"); //モーダルウインドウの表示

        //モーダルウインドウの終了
        $(".modal-overlay,.modal-close").unbind().click(function () {
            $(".modal,.modal-overlay").fadeOut("slow", function () { //閉じるボタンかオーバーレイ部分クリックでフェードアウト
                $('.modal-overlay').remove(); //フェードアウト後、オーバーレイをHTMLから削除
            });
        });
    });
});





var tmp = $('.live:last').data('id');
$(function () {
    function buildMESSAGE(message) {
            
            var did= message.id;
            var messages = $('#liveitem').append('<span id="'+message.vid +'"><img src="'+ message.pic +'" class="live"  data-id="' + did + '"id="' + message.vid + '"onclick="createEMBED(this.id,' +did+ ', this.src)"></span>');
}


    $(function () {
        setInterval(update, 5000);
    });
    function update() { 
        if ($('.live')[0]) { 
            var message_id = $('.live:last').data('id'); 

        } else { 
            var message_id = 0 
        }
        $.ajax({
            url: location.href,
            type: 'GET',
            data: {
                message: { id: message_id }
            },
            dataType: 'json' 
        })
            .always(function (data) { 
                $.each(data, function (i, data) { 
                    buildMESSAGE(data); 
                });
            });
    }
});

function removeEMBED(id, data_id, src){
    var did = data_id;
    $("iframe#"+id).remove();
    $("span#"+id).html('<img src="' + src + '" class="live" data-id="' + did + '" id="' + id + '"onclick="createEMBED(this.id,'+did+', this.src)">');

}


function createEMBED(id, data_id, src) {
    var did=data_id;
    $("span#"+id).html('<img src="' + src + '" class="live" data-id="' + did + '" id="' + id + '"onclick="removeEMBED(this.id,'+did+ ', this.src)">');
    $("#playing").append('<iframe class="playing" id ="'+id+'" data-vid="'+ id +'" width="534" height="334" src="https://www.youtube.com/embed/' + id +'"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>');

}

$(document).ready(function () {
    $("p").text("jQuery稼働テスト(稼働中)");
});
