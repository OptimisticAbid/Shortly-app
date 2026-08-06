import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";


const ClicksGraph = () => {
    const {urls} = useSelector(state => state.urls)

    const chartData = urls.map(url => ({
    name: url.shortUrl,
    clicks: url.clickCount
  }));
  return (
    <div className="w-full h-full p-2 rounded-2xl shadow">
        <p className="text-md font-semibold  mb-3">Clicks per URL</p>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                data={chartData}
                margin={{ top: 10, right: 0, left: 0, bottom: 20 }}
            >
                <XAxis dataKey="name" />
                <YAxis width={30} />
                <Tooltip />

                <Bar dataKey="clicks" fill="#0F766E" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default ClicksGraph;