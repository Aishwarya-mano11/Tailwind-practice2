import "./App.css";

const TABLE_HEAD = ["Name", "Job", "Employed", "Actions"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function App() {
  return (
    <div className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <p
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <p variant="small" color="blue-gray" className="font-normal">
                  {name}
                </p>
              </td>
              <td className="p-4">
                <p variant="small" color="blue-gray" className="font-normal">
                  {job}
                </p>
              </td>
              <td className="p-4">
                <p variant="small" color="blue-gray" className="font-normal">
                  {date}
                </p>
              </td>
              <td className="p-4">
                <p
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Edit
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
