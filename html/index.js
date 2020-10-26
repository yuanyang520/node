$(function() {
    $('#post').on('click',function(event) {
        $.ajax({
            url:"http://localhost:3000/api/user/adduser",
            type:"POST",
            data:{
                username:$('#username').val().trim(),
                password:$('#password').val().trim()
            },
            success:function(res){
                if(res.status===200){
                    console.log(res)
                }
            }
        })
    })
    $('#updata').on('click',function(event) {
        $.ajax({
            url:"http://localhost:3000/api/user/updatauser",
            type:"POST",
            data:{
                id:$('#updatauserid').val().trim(),
                username:$('#updatausername').val().trim(),
                password:$('#updatapassword').val().trim()
            },
            success:function(res){
                if(res.status===200){
                    console.log(res)
                }
            }
        })
    })
    $('#del').on('click',function(event) {
        $.ajax({
            url:"http://localhost:3000/api/user/deluser",
            type:"post",
            data:{
                id:$('#deluserid').val().trim(),
            },
            success:function(res){
                if(res.status===200){
                    console.log(res)
                }
            }
        })
    })
})