$((function(){$(".mobile_menu").click((function(){$(this).toggleClass("active"),$("header .nav").toggleClass("active")})),$("section.shop .content_ form .server_select .list_server .server").click((function(){$("section.shop .content_ form .server_select .list_server .server").each((function(){$(this).removeClass("active")})),$(this).addClass("active"),$('input[name="server"]').val($(this).data("server"))}))}));