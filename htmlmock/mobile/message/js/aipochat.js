var chatSocketIO = null;
var chatTempKeys = [];
var chatTempKeysSize = 10;
$(function() {
    $.initializeRoom = function(roomId) {
    }

    $.onSubmitMsg = function(roomId) {
        if (!roomId) {
            roomId = "default";
        }
        var name = $('#name').val();
        if (!name || name.replace(/^\s+|\s+$/g, "") == "") {
            $('<div style="display:none">').addClass('alert-message').addClass('error')
                .text('Please enter your name.').delay(10).show().delay(800).fadeOut()
                .appendTo('#messages');
            return false;
        }

        var msg = $('#msg').val();
        if (!msg || msg.replace(/^\s+|\s+$/g, "") == "") {
            $('<div style="display:none:">').addClass('alert-message').addClass('error')
                .text('Oops, your message is empty!').delay(10).show().delay(800).fadeOut()
                .appendTo('#messages');
            return false;
        }
        var data = {
            "name":name,
            "body":msg,
            "type":"chat"
        };
        if ($('#imageUrl').val()) {
            data.imageUrl = $('#imageUrl').val();
        } else {
            data.imageUrl = "/img/avatar.png";
        }

        //demo
        data.date = formatDate(new Date(), "HH:mm");
        $('#room_' + roomId).prepend(ich.chatItem(data));
        //demo

        $('#messages').empty();
        if ($(window).height() > 500) {
            $('#msg').val('').focus();
        } else {
            $('#msg').val('');
        }
        $.onKeyUp(roomId);
    };

    $.onKeyUp = function(roomId) {
        if (!roomId) {
            roomId = "default";
        }
        var name = $('#name').val();
        if (!name || name.replace(/^\s+|\s+$/g, "") == "") {
            return true;
        }
        var msg = $('#msg').val();
        var data = {
            "name":name,
            "body":msg,
            "type":"draft"
        };
        if ($('#imageUrl').val()) {
            data.imageUrl = $('#imageUrl').val();
        } else {
            data.imageUrl = "/img/avatar.png";
        }

        //demo
        $('#draft_0987_9963').html(ich.draftItem(data));
        //demo
    }

    $.requestPermission = function(callback) {
        window.webkitNotifications.requestPermission(callback);
    }

    $.showNotificationFunction = function(img, title, text) {
        return function() {
            $.showNotification(img, title, text);
        }
    }

    $.showNotification = function(img, title, text) {
        if (window.webkitNotifications) {
            if (window.webkitNotifications.checkPermission() > 0) {
                if ($('#notifyLink').size() == 0) {
                    $('<a>').attr('id', 'notifyLink').addClass('btn info').bind('click',
                        function() {
                            $.requestPermission(function() {
                                $('#notify').hide();
                            });
                            return false;
                        }).text('Google Chrome デスクトップ通知を有効にする').prependTo('#notify');
                }
            } else {
                var notification = window.webkitNotifications.createNotification(img, title, text);
                notification.ondisplay = function() {
                    setTimeout(function() {
                        notification.cancel();
                    }, 3000);
                };
                notification.show();
            }
        }
    }

    $.submit = function(formId, afterSuccess, afterSubmit) {
        $("#" + formId + " .help-inline").hide();
        $("#" + formId + " .clearfix").removeClass("error");
        $("#" + formId + " input[type='submit']").attr('disabled', 'disabled');

        var url = $("#" + formId).attr('action');
        $.ajax({
            type : "POST",
            url : url,
            cache : false,
            dataType : "json",
            data : $("#" + formId).serialize(),
            success : function(result) {
                try {
                    var jsonData = result;
                    if (jsonData["result"] == "success") {
                        if (afterSuccess) {
                            afterSuccess();
                        }
                        if (jsonData["redirect"]) {
                            if (jsonData["redirect"] == "reload") {
                                location.reload();
                            } else {
                                if ($.mobile && $.mobile.changePage) {
                                    $.mobile.changePage(jsonData["redirect"], { transition: "slideup"});
                                } else {
                                    location.href = jsonData["redirect"];
                                }
                            }
                        }
                    } else {
                        var error = "Unknown Error";
                        if (jsonData["errors"]) {
                            for (var key in jsonData["errors"]) {
                                //console.log("#" + formId + " #" + key);
                                $("#" + formId + " #" + key)
                                    .parent("div").parent(".clearfix").addClass("error");
                                $("#" + formId).find("#" + key + "Error")
                                    .text(jsonData["errors"][key])
                                    .slideDown("fast");
                            }
                        } else {
                            $("#" + formId).find("#grobalError")
                                .text(error).slideDown("fast");
                        }

                    }
                } catch (e) {
                    $("#" + formId).find("#grobalError").text(e.toString())
                        .slideDown("fast");
                }
                $("#" + formId + " input[type='submit']").removeAttr(
                    'disabled');
                if (afterSubmit) {
                    afterSubmit();
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                var error = "Request Error: " + errorThrown + ". " + url;
                $("#" + formId).find("#grobalError").text(
                    error).slideDown("fast");
                $("#" + formId + " input[type='submit']").removeAttr(
                    'disabled');
                if (afterSubmit) {
                    afterSubmit();
                }
            }
        });
    };
});
