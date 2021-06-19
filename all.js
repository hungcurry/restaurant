



let forms = document.querySelectorAll('.needs-validation');
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })


  const listModal = document.querySelectorAll('.linkModal');
  const body = document.querySelector('body');
    listModal.forEach(function(item){
      item.addEventListener('click' , listModalFn)
    })
    function listModalFn(e){
      e.preventDefault;
      window.addEventListener('shown.bs.modal',function(){
        body.classList.add('modal-open');
      });
    };


    // $(document).ready(function () {
    //   $('a[data-dismiss="modal"][data-toggle="modal"]').on('click',function(){
    //     var target = $(this).data('target')
    //     console.log(target)

            // 選取到 div ２個modal
    //     $(target).on('shown.bs.modal',function(){
    //       $('body').addClass('modal-open')
    //     })
    //   })
    // });
