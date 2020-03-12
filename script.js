const data = JSON.parse('[{"firstname":"Виктор","lastname":"Петров","email":"test@test.com","phonenumber":"77777777777","birthday_contact":"1981-03-03","company":"Company 1"},{"firstname":"Вася","lastname":"Пупкин","email":"test@test.com","phonenumber":"333333333333","birthday_contact":"2004-10-20","company":"Company 2"},{"firstname":"Дима","lastname":"Коршунов","email":"test@test.com","phonenumber":"22222222222","birthday_contact":"1991-07-16","company":"Company 3"},{"firstname":"Сан","lastname":"Саныч","email":"test@test.com","phonenumber":"33333333333","birthday_contact":"1998-07-03","company":"Company 4"}]');


function showTable(array) {
	const tableWrapper = document.getElementById('table_wrapper');

	const table = document.createElement('table');
	table.className = 'table';
	tableWrapper.appendChild(table);
	
	const thead = document.createElement('thead');
	table.appendChild(thead);
	
	for (let prop in array[0]) {
		const th = document.createElement('th');
		th.innerHTML = prop[0].toUpperCase() + prop.slice(1);
		thead.appendChild(th);
	}
	
	for (let obj of array) {
		const tr = document.createElement('tr');
		table.appendChild(tr);
		
		for (let prop in obj) {
			const td = document.createElement('td');
			td.innerHTML = obj[prop];
			tr.appendChild(td);
		}
	}
}


function deleteTable() {
	const tableWrapper = document.getElementById('table_wrapper');
	tableWrapper.removeChild(tableWrapper.firstChild);
}


function sortTable() {
	const sort = document.getElementById('sort');
	sort.addEventListener('change', (event) =>  {
		const sortBy = event.target.value;
		if (sortBy === 'day') {
			const sortedByDay = data.slice();
			sortedByDay.sort((first, second) => {
				return (new Date(first.birthday_contact).getDate()) - (new Date(second.birthday_contact).getDate());
			});
			deleteTable();
			showTable(sortedByDay);
		} else if (sortBy === 'month') {
			const sortedByMonth = data.slice();
			sortedByMonth.sort((first, second) => {
				return (new Date(first.birthday_contact).getMonth()) - (new Date(second.birthday_contact).getMonth());
			});
			deleteTable();
			showTable(sortedByMonth);
		} else if (sortBy === 'empty') {
			alert('We have no such data in this table');
		} else {
			deleteTable();
			showTable(data);
		}
	})
	
}


showTable(data);
sortTable();
