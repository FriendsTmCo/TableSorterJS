function sortTable(row,tableId) {
        let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById(tableId);
        switching = true;
        // Set the sorting direction to ascending:
        dir = "ascending";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[row];
                y = rows[i + 1].getElementsByTagName("TD")[row];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "ascending") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "descending") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                /* If No Switching Has Been Done And The Direction Is "ascending",
                Set The Direction To "descending" And Run The While Loop Again. */
                if (switchcount == 0 && dir == "asc") {
                    dir = "descending";
                    switching = true;
                }
            }
        }
    }
