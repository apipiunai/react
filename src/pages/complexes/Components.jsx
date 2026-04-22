import LineChartComponent from "./charts/LineChartComponent.jsx"


export default function Components() {

    const components = [
        {
            category: "charts",
            name: "Line Chart",
            codes: [
                { name: "LineChartComponent.jsx", code: "codes/LineChartComponent.txt" },
                { name: "CustomTooltip.jsx", code: "codes/LineChartComponent.txt" },
            ],
            component: <LineChartComponent />
        },
        {
            category: "utils",
            name: "Element Size",
            codes: [
                { name: "ElementSize.jsx", code: "codes/LineChartComponent.txt" }
            ],
            component: <LineChartComponent />
        },
        {
            category: "utils",
            name: "Element Position",
            codes: [
                { name: "ElementPosition.jsx", code: "codes/LineChartComponent.txt" }
            ],
            component: <LineChartComponent />
        }
    ]

    return components;
}


