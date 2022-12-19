import { Input } from 'antd'

const Work: React.FC = () => {
  return (
    <>
      <div className="bg-purple">
        {/* 头部导航 */}
        <div className="flex items-center justify-between h-28 pl-20 pr-20">
          <h1 className="text-2xl">MEIZU</h1>
          <ul className="flex">
            <li>MEIZU</li>
            <li>MEIZU</li>
            <li>MEIZU</li>
            <li>MEIZU</li>
          </ul>
          <Input type="search"></Input>
          <div>头像</div>
        </div>
        {/* title-追求源于热爱 */}
        <div>追求源于热爱</div>
        {/* 热门话题 */}
        <div>
          {/* 热门话题 - 更多 */}
          <div></div>
          {/* 热门话题 - card */}
          <div></div>
        </div>
        {/* ==================== tailwind ==================== */}
        <div className="flex items-center bg-blue rounded-xl shadow-md p-6 space-x-4 max-w-sm mx-auto">
          <div className="flex-shrink-0">
            <img className="w-12 h-12" src="../assets/react.svg" alt="" />
          </div>
          <div className="flex-shrink-0">
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new messaeg!</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-purple-light rounded-xl shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48 rounded-t-xl md:rounded-t-none md:rounded-l-xl"
              src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="text-sm tracking-wide font-semibold text-indigo-500">
              Case Study
            </div>
            <a className="block mt-1 text-lg font-medium text-black" href="#">
              Finding customers for your new business
            </a>
            <p className="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Work
