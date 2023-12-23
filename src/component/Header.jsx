import React, {useState} from 'react'
import filterIcon from '..//Images/Tuning.svg'
import downIcon from '../Images/Down.svg'


function Navbar(props) {
    const [toggleFilter, settoggleFilter] = useState(false);

    function handleDisplayToggle(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrderingValue(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleOrderValue(e.target.value);
        }
    }
    
  return (
    <>
        <section className="w-full border-b border-solid border-[#dfe4e9]">
            <div className="w-[95%] mx-auto py-4 px-0">
                <div>
                    <div className="flex items-center justify-between px-[0.8rem] py-[0.4rem] w-[fit-content] border border-solid border-[#dfe4e9] shadow-md rounded-[0.4rem] cursor-pointer hover:shadow-lg" onClick={handleDisplayToggle}>
                        <div className="flex items-center mr-[0.6rem]">
                            <img className='h-[14px] fill-[#dfe4e9' src={filterIcon} alt="icon" />
                        </div>
                        <div className="font-[500]">
                            Display
                        </div>
                        <div className="flex items-center ml-[0.3rem]">
                            <img className='h-[16px]' src={downIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleFilter ? "display-dropdown display-dropdown-show" : "display-dropdown"}>
                        <div className="display-filters">
                            <div className="text-[#808184] font-[500]">
                                Grouping
                            </div>
                            <div className="nav-dropdown-selector">
                                <select value={props.groupValue} onChange={handleDisplayToggle} className='p-[0.3rem] w-[100px] border border-solid border-[#dfe4e9] rounded-[0.3rem] font-semibold cursor-pointer' name="grouping" id="">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="display-filters">
                            <div className="text-[#808184] font-[500]">
                                Ordering
                            </div>
                            <div className="nav-dropdown-selector">
                                <select value={props.orderValue} onChange={handleOrderingValue} className='p-[0.3rem] w-[100px] border border-solid border-[#dfe4e9] rounded-[0.3rem] font-semibold cursor-pointer' name="grouping" id="">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar;
