var keywords = ["layout", "zoom", "circle", "style", "append", "attr"]
d3.cloud()
    .size([500, 500])
    .words(data)
    .rotate(d => d.text.length > 5 ? 0 : 90)
    .fontSize(d => wordScale(d.frequency))
    .on("end", draw)
    .start();

function draw(words) {
    var wordG = d3.select("svg").append("g")
        .attr("id", "wordCloudG").attr("transform","translate(250,250)");
    wordG.selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => d.size + "px")
        .style("fill", d => keywords.indexOf(d.text) > -1 ? "#FE9922" : "#4F442B")
        .style("opacity", .75)
        .attr("text-anchor", "middle")
        .attr("transform", d => "translate(" + [d.x, d.y] + ") rotate(" + d.rotate + ")")
        .text(d => d.text);
};

