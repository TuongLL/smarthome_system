import { Box } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import variables from "@/styles/global.module.scss";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Energy() {
  const optionssalesoverview = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: ["#fb9678", "#03c9d7"],
    fill: {
      type: "solid",
      opacity: 0.5,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },

      foreColor: variables.textGray,
      fontFamily: "Montserrat",
      sparkline: {
        enabled: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: true,
      position: 'top',
      fontWeight: '700',
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 5,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
        align: 'left'
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      curve: "smooth",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
    title: {
      text: "Energy Overview",
      align: "left",
      style: {
        fontSize: "18px",
      },
    },
  };
  const seriessalesoverview = [
    {
      name: "Ample Admin",
      data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
    },
    {
      name: "Pixel Admin",
      data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
  ];
  return (
    <Chart
      options={optionssalesoverview}
      series={seriessalesoverview}
      type="area"
      height="295px"
      width={1000}
    />
  );
}

export default Energy;
