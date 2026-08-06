import { FaUser } from "react-icons/fa"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const AccountsToggle = ({ isCollapsed }) => {
  return (
    <div className="pb-2 mb-2 mt-2 ">
        <button className={`flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 ${isCollapsed ? "justify-center" : "w-full items-center"}`}>
            <FaUser className="size-8 rounded shrink-0 bg-primary shadow"/>

            {!isCollapsed && (
              <>
                <div className="text-start">
                    <span className="text-sm font-bold block">
                        Syed Abid
                    </span>
                    <span className="text-xs block text-stone-500">syed@123</span>
                </div>

                <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-sm" />
                <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-sm " />
              </>
            )}
        </button>
    </div>
  )
}

export default AccountsToggle