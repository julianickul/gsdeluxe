function gdxTable(table) {
	this.table = table;
	this.tableParent = this.table.parent();
	this.rows = [];
	this.defaultTableWidth = this.getDefaultTableWidth();
	
	this.init();
}
gdxTable.prototype = {
	init: function() {
		this.rows = this.getRows();
		var tableWidthInRows = this.rows[0].length;
		this.addToggler();
		this.cloneHeaders();
		this.collapseTable(tableWidthInRows);

		var self = this;
		var resizeTimer;
		$(window).on('resize', function(e) {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				self.collapseTable(tableWidthInRows);
			}, 100);
		});
	},
	collapseTable: function(iteration) {
		if (iteration < 1) return;
		
		var tableWidth = this.table.width();
		var parentWidth = Math.floor(this.tableParent.width());
		
		if (tableWidth > parentWidth) {
				this.table.attr('data-table-collapsed', 1);
				this.table.attr('data-items-visible', iteration-1);
				this.collapseTable(iteration-1);
		} else if (parentWidth == tableWidth && parentWidth > this.defaultTableWidth) {
			this.table.attr('data-table-collapsed', 0);
		}
		
	},
	getRows: function() {
		var rowsArr = [];
		this.table.find('tr').each(function(idx, val) {
			var row = $(val);
			rowsArr.push(row.children())
		})
		return rowsArr;
	},

	addToggler: function() {
		for(var i = 1; i < this.rows.length; i++) {
			var firstCell = $(this.rows[i][0]);
			firstCell.prepend(
				$('<span class="tbl-toggle"></span>')
				.on('click', function() {
					var parent =  $(this).closest('tr');
					var currentValue = parent.attr('data-row-showall');
					var attrValue = (typeof currentValue === typeof undefined || currentValue === false || parent.attr('data-row-showall') == 0) ? 1:0;
					parent.attr('data-row-showall', attrValue);
				})
			)
		}
	},
	cloneHeaders: function() {
		var headers = [];
		$(this.rows[0]).each(function(idx, val) {
			headers.push(val.textContent);
		})

		for(var i = 1; i < this.rows.length; i++) {
			$(this.rows[i]).each( function (idx, val) {
				$(val).prepend(
					$('<span class="gdx-row-title">' + headers[idx] + '</span>')
				)
				
			})
		}
	},

	getDefaultTableWidth: function() {
		this.table.css('width', 'auto');
		var width = this.table.width();
		this.table.css('width', '');
		return width;
	}
}

