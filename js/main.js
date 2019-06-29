// import merge from './modules/common';
// import FixedHeader from './modules/fixed';
// import CalcForm from './modules/calcForm';
// init
// document.addEventListener('DOMContentLoaded', function() {
// 	let calcForm = new CalcForm;
// });

// jquery version

// jQuery(function() {
// 	calcForm();
// });

// function calcForm() {
// 	let inputs = $('[data-calc]');
// 	inputs.each(function(i) {
// 		let title = $(this).attr("data-calc-title");
// 		let value = $(this).attr('data-calc-value');

// 		$(this).attr('data-calc-input-id', i);

// 		if($(this).is(':checked')) {
// 			createRow($(this).attr('data-calc-input-id'), title, value);
// 		}

// 		$(this).on('change', function() {
// 			let radioName = $(this).attr('name');
// 			$(`[name=${radioName}]`).each(function() {
// 				let currentId = $(this).attr('data-calc-input-id');
// 				if ($(this).is(':not(:checked)')) {
// 					$($(`.row[data-calc-id=${currentId}]`)).remove();
// 				}
// 			});
// 			createRow($(this).attr('data-calc-input-id'), title, value);
// 		});
// 	});

// 	function createRow(id, title, value) {
// 		$('.sidebar-block').append(`<div data-calc-id="${id}" class="row">
// 			<strong class="title">${title}</strong>
// 			<strong class="value">$${value}</strong>
// 		</div>`)
// 	};
// }