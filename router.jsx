import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import AdminLogin from './pages/Auth/AdminLogin.jsx'
import EmployeeLogin from './pages/Auth/EmployeeLogin.jsx'
import AdminPortal from './pages/Auth/AdminPortal.jsx'
import Landing from './pages/Landing/Landing.jsx'
import AdminDashboard from './pages/Admin/Dashboard.jsx'
import AdminProducts from './pages/Admin/Products.jsx'
import AdminCategories from './pages/Admin/Categories.jsx'
import AdminUsers from './pages/Admin/Users.jsx'
import AdminRequests from './pages/Admin/Requests.jsx'
import AdminReports from './pages/Admin/Reports.jsx'
import EmployeeDashboard from './pages/Employee/Dashboard.jsx'
import EmployeeStock from './pages/Employee/Stock.jsx'
import EmployeeRequests from './pages/Employee/Requests.jsx'
import PortalDashboard from './pages/Portal/Dashboard.jsx'
import PortalCatalog from './pages/Portal/Catalog.jsx'
import PortalRequests from './pages/Portal/Requests.jsx'
import PortalProfile from './pages/Portal/Profile.jsx'
import Chat from './pages/Chat/Chat.jsx'
import ProtectedRoute from './context/ProtectedRoute.jsx'

export default function AppRouter(){return <Routes>
  <Route path="/" element={<Landing/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/>
  <Route path="/admin/login" element={<AdminLogin/>}/><Route path="/employee/login" element={<EmployeeLogin/>}/><Route path="/admin-portal" element={<AdminPortal/>}/>
  <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminDashboard/></ProtectedRoute>}/>
  <Route path="/admin/products" element={<ProtectedRoute roles={['admin']}><AdminProducts/></ProtectedRoute>}/>
  <Route path="/admin/categories" element={<ProtectedRoute roles={['admin']}><AdminCategories/></ProtectedRoute>}/>
  <Route path="/admin/users" element={<ProtectedRoute roles={['admin']}><AdminUsers/></ProtectedRoute>}/>
  <Route path="/admin/requests" element={<ProtectedRoute roles={['admin']}><AdminRequests/></ProtectedRoute>}/>
  <Route path="/admin/reports" element={<ProtectedRoute roles={['admin']}><AdminReports/></ProtectedRoute>}/>
  <Route path="/employee" element={<ProtectedRoute roles={['employee']}><EmployeeDashboard/></ProtectedRoute>}/>
  <Route path="/employee/stock" element={<ProtectedRoute roles={['employee']}><EmployeeStock/></ProtectedRoute>}/>
  <Route path="/employee/requests" element={<ProtectedRoute roles={['employee']}><EmployeeRequests/></ProtectedRoute>}/>
  <Route path="/portal" element={<ProtectedRoute roles={['user']}><PortalDashboard/></ProtectedRoute>}/>
  <Route path="/portal/catalog" element={<ProtectedRoute roles={['user']}><PortalCatalog/></ProtectedRoute>}/>
  <Route path="/portal/requests" element={<ProtectedRoute roles={['user']}><PortalRequests/></ProtectedRoute>}/>
  <Route path="/portal/profile" element={<ProtectedRoute roles={['user']}><PortalProfile/></ProtectedRoute>}/>
  <Route path="/chat" element={<ProtectedRoute roles={['admin','employee','user']}><Chat/></ProtectedRoute>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
</Routes>}
