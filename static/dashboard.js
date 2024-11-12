$(document).ready(function () {
  function showLoading(show) {
    if (show) {
      $("#loading").removeClass("d-none");
    } else {
      $("#loading").addClass("d-none");
    }
  }

  function fetchData(filters = {}) {
    showLoading(true);
    $.get("http://127.0.0.1:5000/api/data", filters, function (data) {
      createCharts(data);
      showLoading(false);
    });
  }

  function createCharts(data) {
    let intensity = data.map((d) => d.intensity);
    let likelihood = data.map((d) => d.likelihood);
    let relevance = data.map((d) => d.relevance);
    let topics = data.map((d) => d.topic);

    // Group data by a specific field (e.g., country or sector)
    function groupByField(data, field) {
      return data.reduce((acc, d) => {
        acc[d[field]] = (acc[d[field]] || 0) + d.intensity;
        return acc;
      }, {});
    }

    // Create grouped data for Country, Region, and Sector
    let countryData = groupByField(data, "country");
    let regionData = groupByField(data, "region");
    let sectorData = groupByField(data, "sector");

    // Plotly Bar Chart Function
    function createBarChart(divId, data, title) {
      let trace = {
        x: Object.keys(data),
        y: Object.values(data),
        type: "bar",
        marker: { color: "rgb(26, 118, 255)" },
      };
      Plotly.newPlot(divId, [trace], { title });
    }

    // Existing Charts
    let intensityChart = {
      x: topics,
      y: intensity,
      type: "bar",
      marker: { color: "rgb(26, 118, 255)" },
    };

    let scatter3D = {
      x: likelihood,
      y: relevance,
      z: intensity,
      mode: "markers",
      type: "scatter3d",
      marker: { size: 5, color: relevance, colorscale: "Viridis" },
    };

    let swotCounts = data.reduce((acc, d) => {
      acc[d.pestle] = (acc[d.pestle] || 0) + 1;
      return acc;
    }, {});

    let pieChart = {
      values: Object.values(swotCounts),
      labels: Object.keys(swotCounts),
      type: "pie",
    };

    // Render Existing Charts
    Plotly.newPlot("intensity-chart", [intensityChart], {
      title: "X-Intensity by Y-Topic",
    });
    Plotly.newPlot("3d-likelihood-chart", [scatter3D], {
      title: "X-Likelihood vs Y-Relevance vs Z-Intensity",
    });
    Plotly.newPlot("swot-pie-chart", [pieChart], {
      title: "SWOT Distribution",
    });

    // Render New Charts for Country, Region, and Sector
    createBarChart("country-bar-chart", countryData, "Intensity by Country");
    createBarChart("region-bar-chart", regionData, "Intensity by Region");
    createBarChart("sector-bar-chart", sectorData, "Intensity by Sector");
  }

  // Fetch and apply filters when the button is clicked
  $("#filterBtn").click(function () {
    let filters = {
      end_year: $("#endYear").val(),
      topic: $("#topic").val(),
      sector: $("#sector").val(),
      region: $("#region").val(),
      pestle: $("#pestle").val(),
      source: $("#source").val(),
      country: $("#country").val(),
    };
    fetchData(filters);
  });

  // Fetch data without any filters on page load
  fetchData();
});
