import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { getStoredBook } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";

const PagesToRead = () => {
    const booksData = useLoaderData();
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const getBooksToRead = getStoredBook();
        setBooks(getBooksToRead);
      },[]);

      const booksDataArr = booksData.filter(book => books.includes(book.book_id));
      

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      
  return (
    <div style={{ width: "100%", height: "80vh" }} className='lg:px-20 md:px-8 sm:px-6 max-sm:px-4 lg:py-10 md:py-8 sm:py-4 max-sm:py-2'>
       <ResponsiveContainer width="100%" height="100%">
        <BarChart
        width={1200}
        height={300}
        data={booksDataArr}
        margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="book_name" />
            <YAxis />
            <Bar dataKey="total_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {
                    booksDataArr.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))
                }
            </Bar>
        </BarChart>
       </ResponsiveContainer>

    </div>
  )
}

export default PagesToRead