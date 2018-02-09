var ModalHelper = (function(bodyCls) {
	var scrollTop;
	return {
		afterOpen: function() {
			scrollTop = document.scrollingElement.scrollTop;
			document.body.classList.add(bodyCls);
			document.body.style.top = -scrollTop + 'px';
		},
		beforeClose: function() {
			document.body.classList.remove(bodyCls);
			document.scrollingElement.scrollTop = scrollTop;
		}
	};
})('modal-open');
$(function(){
	/*****选择车型****/
	$("#modelName").on("click",function(){
		$("#carDetile").show();
		ModalHelper.afterOpen();
	});
	$(".no-car").on("click",function(){
		$("#carDetile").hide();
		ModalHelper.beforeClose();
	});
})