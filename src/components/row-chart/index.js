import * as d3 from 'd3'
import React, { useEffect, useRef } from 'react';
import "./index.css"


const RowChart = () => {
    const d3Container = useRef(null);
    useEffect(() => {
        var data = [{
            subject: 'Level 2-Problem-General-Service Issues',
            value: 18
        }, {
            subject: 'Level 3-Problem-General-Service Issues',
            value: 12
        }, {
            subject: 'Level 4-Delivery issue',
            value: 3
        }, {
            subject: 'Level 4-Delay your way',
            value: 1
        }, {
            subject: 'Level 4-Crown card requests',
            value: 1
        },];
        
        // Dimensions
        var margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 300
        },
            width = parseInt(d3.select(d3Container.current).style('width'), 10),
            
            width = width - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom,
            barHeight = 33,
            percent = d3.format('%');
        
        // Create the scale for the axis
        var xScale = d3.scaleLinear()
            .range([0, width]); // the pixel range to map to
        
        var yScale = d3.scaleBand()
            .range([0, height]);
        
        // Create the axis
        var xAxis = d3.axisBottom()
            .scale(xScale)
        // .orient('bottom')
         .ticks(10);
        
        var yAxis = d3.axisLeft()
            .scale(yScale)
        // .orient('left');
        
        xScale.domain([0, 20]); // min/max extent of your data (this is usually dynamic e.g. max)
        yScale.domain(data.map(function (d) {
            return d.subject;
        }));
        
        // Render the SVG
        var svg = d3.select(d3Container.current)
            .append('svg')
            .attr('height', height+10 + margin.top + margin.bottom)
            .append('g') // Group the content and add margin
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        // Render the axis
        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            
            .call(yAxis)
            ;

        // Render the bars
        svg.selectAll('bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('y', function (d) {
                return yScale(d.subject);
            })
            .attr('width', function (d) {
                return xScale(d.value)
            })
            .attr('height', barHeight);
    }, [d3Container.current])

    return (
        <svg
            className="d3-component"
            width={1500}
            height={1000}
            ref={d3Container}
        />)

}
export default RowChart