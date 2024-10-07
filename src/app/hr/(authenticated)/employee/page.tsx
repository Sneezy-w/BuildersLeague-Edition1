import EmployeeCard from '@/components/EmployeeDashboard/EmployeeCard'
import PageButton from '@/components/EmployeeDashboard/PageButton'

export default function Dashboard() {
  return (
    <>
      <div className="  flex w-full flex-col space-y-2">
        <div className="m-6 flex flex-col space-x-4 self-end">
          <div className="mb-4 flex flex-wrap space-x-2">
            <PageButton label="Add" link="/employee/add" />
            <PageButton label="Import" link="/import" />
            <PageButton label="Export" link="/export" />
          </div>

          <PageButton label="Email to all" link="/email" />
        </div>
      </div>

      <div className="flex w-full flex-col space-y-4">
        {/* Using a responsive grid for Employee Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Philip Fake Name', learningHours: 20, employeeNumber: 10 },
            { name: 'Jane Doe', learningHours: 15, employeeNumber: 11 },
            { name: 'John Smith', learningHours: 25, employeeNumber: 12 },
          ].map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              learningHours={employee.learningHours}
              employeeNumber={employee.employeeNumber}
            />
          ))}
        </div>
      </div>
    </>
  )
}
