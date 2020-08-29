$(function () {
    $(".nav .nav-link").on("click" , function () {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});
$(function () {
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section ID
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250 , "easeInOutExpo");

    });
});
$(function () {
    var value = 2;
    var value1 = 0;
    $("#danger").fadeOut();
    $("#number").change(function () {
        value = this.value;
        value1 = 0;
        if (document.getElementById("box").hasChildNodes()){
            let box = document.getElementById("box");
            while (box.lastElementChild) {
                box.removeChild(box.lastElementChild)
            }
            document.getElementById("danger").style.display = 'none';
        }

    });
    $("#add-btn").on('click' , function () {
        document.getElementById("danger").style.display = 'none';
        if (value1 < value){
            var items = document.createElement("DIV");
            items.setAttribute("class","item");
            let x = (value1) * 20;
            items.style.bottom = x + "px";
            document.getElementById("box").appendChild(items);
            value1 += 1;
        }
        else {
            let dang = document.getElementById("danger");
            dang.innerHTML = "The box is full !!";
            dang.style.display = 'block';
        }
    });
    $("#remove-btn").on('click' , function () {
        document.getElementById("danger").style.display = 'none';
        if (value1 > 0){
            let box = document.getElementById("box");
            box.removeChild(box.lastElementChild);
            value1 -= 1;
        }
        else {
            let dang = document.getElementById("danger");
            dang.innerHTML = "The box is empty !!";
            dang.style.display = 'block';
        }
    });
});
$(function () {
    let items = $("#queue-box .row").children();
    let n = items.length;
    var rear = 0;
    var front = 0;
    var size = 0;
    $("#enQ").on("click" , function () {
        let dang = document.getElementById("danger-queue");
        dang.style.display = 'none';
        if (size == 12){
            dang.innerHTML = "The queue is full !!";
            dang.style.display = 'block';
        }
        else{
            let items = $("#queue-box .row").children();
            let n = items.length;
            $("#queue-box .row").find(".queue-item").text("");
            items[rear].style.backgroundColor = "#6f42c1";
            if (front == rear){
                items[front].innerHTML = "front<br>rear";
            }else{
                items[rear].innerHTML = "rear";
                items[front].innerHTML = "front";

            }
            rear++;
            size++;
            if (rear == 12){
                rear = 0;
            }
        }

    });
    $("#deQ").on("click" , function () {
        let dang = document.getElementById("danger-queue");
        dang.style.display = 'none';
        if (size == 0){
            dang.innerHTML = "The queue is empty !!";
            dang.style.display = 'block';
        }
        else{
            let items = $("#queue-box .row").children();
            let n = items.length;

            items[front].style.backgroundColor = "#9fcdff";
            $("#queue-box .row").find(".queue-item").text("");

            size--;
            front ++;
            if (front == 12){
                front = 0;
            }
            console.log(front)
            console.log(rear)
            if (front == rear - 1){
                items[front].innerHTML = "front<br>rear";
            }else{
                items[(rear - 1)%12].innerHTML = "rear";
                items[(front)%12].innerHTML = "front";
            }

        }

    });
});
$(function () {
    let numberData = 0;
    let nums = 0;
    let first = 2;
    $("#insert-btn").on("click", function () {
        if (numberData == 0 || numberData == -1){
            let p = document.getElementById("null-p");
            p.style.display = "none";
        }
        if (numberData == -1){
            numberData = 0;
        }
        let start = document.getElementById("start-node");
        start.style.display = "flex";
        numberData ++;
        nums++;
        $("#nodes").append(`<div class="col-md-1 node-data">
\t\t\t\t\t\t<div class="node">data${nums}</div>
\t\t\t\t\t\t<div class="icon-arrow">
\t\t\t\t\t\t\t<i class="fa fa-arrow-right animated fadeInRight infinite"></i>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>`);
    });
    $("#removeFirst").on("click" , function () {
        if (numberData >= 0){
            numberData --;
            if (numberData >= 0){
                $("#nodes").children()[first].remove();
            }
            else{
                let p = document.getElementById("null-p");
                p.style.display = "block";
                let start = document.getElementById("start-node");
                start.style.display = "none";

            }
        }

    });
    $("#removeLast").on("click" , function () {
        if (numberData >= 0){
            numberData --;
            if (numberData >= 0){
                $("#nodes").children()[numberData + 2].remove();
            }
            else{
                let p = document.getElementById("null-p");
                p.style.display = "block";
                let start = document.getElementById("start-node");
                start.style.display = "none";
            }
        }

    });
});