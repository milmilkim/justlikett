const Nav = () => {
  return (
    <div className="fixed top-0 left-0 m-2 font-galmuri9">
      <input type="checkbox" id="toggle-menu" className="hidden peer" />

      <label
        htmlFor="toggle-menu"
        className="px-2 py-1 bg-black text-white cursor-pointer peer-checked:hidden"
      >
        <span className="">open</span>
      </label>

      <label
        htmlFor="toggle-menu"
        className="px-2 py-1 bg-black text-white cursor-pointer hidden peer-checked:inline"
      >
        <span className="">close</span>
      </label>

      <s_sidebar_element>
        <nav className="category hidden peer-checked:block mt-2 p-2 border-r-2 border-t-2 border-b-2 border-l-2 bg-gray-100 border-r-gray-400 border-b-gray-400 border-l-gray-200 border-t-gray-200 text-[11px]">
          [##_category_list_##]
        </nav>
      </s_sidebar_element>
    </div>
  );
};

export default Nav;
