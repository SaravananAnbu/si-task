const COST_PERFORMANCE_INDEX = [
    {
        uv: 4000, pv: 2400, amt: 2400,
    },
    {
        uv: 3000, pv: 1398, amt: 2210,
    },
    {
        uv: 2000, pv: 9800, amt: 2290,
    },
    {
        uv: 2780, pv: 3908, amt: 2000,
    },
    {
        uv: 1890, pv: 4800, amt: 2181,
    },
    {
        uv: 2390, pv: 3800, amt: 2500,
    },
    {
        uv: 3490, pv: 4300, amt: 2100,
    }
];

const COST_BUDJET_VS_EXPENSE = [
    {
        uv: 4000, pv: 2400, amt: 2400,
    },
    {
        uv: 3000, pv: 1398, amt: 2210,
    },
    {
        uv: 2000, pv: 9800, amt: 2290,
    },
    {
        uv: 2780, pv: 3908, amt: 2000,
    },
    {
        uv: 1890, pv: 4800, amt: 2181,
    },
    {
        uv: 2390, pv: 3800, amt: 2500,
    },
    {
        uv: 3490, pv: 4300, amt: 2100,
    }
]

const PAYMENTS = [
    ['Type', 'Payments'],
    ['Salary', 11],
    ['Contract Payments', 2],
    ['Overhead', 2],
    ['IT and Network', 2],
    ['MAnagement', 7],
]

const PROJECT_QUALITY_TABLE_DATA = [
    { issue: "Critical", total: 7, overdue: 2, due: 3, yet_to_start: 2 },
    { issue: "High", total: 9, overdue: 5, due: 2, yet_to_start: 2 },
    { issue: "Medium", total: 12, overdue: 6, due: 5, yet_to_start: 1 },
    { issue: "Low", total: 25, overdue: 9, due: 11, yet_to_start: 1 }
]

const PROJECT_QUALITY_CHART_DATA = [
    ['Type', 'Quality'],
    ["Critical" , 7],
    ["High" , 9],
    ["Medium" , 12],
    ["Low" , 25]
]

const PROJECT_RISK_TABLE_DATA = [
    { risk: "Catastropic Risk", total: 3, remote: 0, unlikely: 1, likely: 1, highly_likely: 1, nearly_certain: 0 },
    { risk: "Major Risk", total: 7, remote: 2, unlikely: 1, likely: 1, highly_likely: 1, nearly_certain: 2 },
    { risk: "Moderate Risk", total: 3, remote: 1, unlikely: 1, likely: 0, highly_likely: 0, nearly_certain: 1 },
    { risk: "Minor Risk", total: 2, remote: 0, unlikely: 0, likely: 0, highly_likely: 1, nearly_certain: 1 },
    { risk: "Insignificant Risk", total: 5, remote: 1, unlikely: 1, likely: 1, highly_likely: 1, nearly_certain: 1 }
]

const PROJECT_OPERATION_TABLE_DATA = [
    { phases: "Discover", poc: 90, status: "Catastropic Risk", deadline: "04/03/2020", deliverables: 3, overdue: 1, upcoming: 1, completed: 2 },
    { phases: "Prepare", poc: 65, status: "Major Risk", deadline: "04/03/2020", deliverables: 5, overdue: 1, upcoming: 1, completed: 4 },
    { phases: "Expolore", poc: 0, status: "Moderate Risk", deadline: "04/03/2020", deliverables: 11, overdue: 1, upcoming: 0, completed: 0 }
   
]

const PROJECT_RISK_CHART_DATA = [
    ['Type', 'Risk'],
    ["Catastropic Risk", 3],
    ["Major Risk", 7],
    ["Moderate Risk", 3],
    ["Minor Risk", 2],
    ["Insignificant Risk", 5]
]


export { COST_PERFORMANCE_INDEX, COST_BUDJET_VS_EXPENSE, PAYMENTS, PROJECT_QUALITY_TABLE_DATA, PROJECT_RISK_TABLE_DATA, PROJECT_QUALITY_CHART_DATA, PROJECT_RISK_CHART_DATA, PROJECT_OPERATION_TABLE_DATA }