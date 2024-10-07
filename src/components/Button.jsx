
export default function Button({children}){
    return(<>
        <button className="bg-white hover:bg-slate-100 text-[#5A6ACF]  border py-2 px-4 rounded-md shadow-sm text-sm">
              {children}
        </button>
        </>
    )
}