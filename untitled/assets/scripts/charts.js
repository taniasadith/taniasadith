export {drawCharts}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawCharts() {
    drawPieChart()
}

function drawPieChart() {

    // Create the data table.
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    // Set chart options
    const options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 400,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data, options);

    // Redraw chart on window resize
    $(window).resize(function () {
        chart.draw(data, options);
    });

}

