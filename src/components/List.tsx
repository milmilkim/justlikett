const List = () => {
  return (
    <>
      <s_article_rep>
          <s_index_article_rep>
            <div className="bg-white my-2">
              [##_article_rep_title_##] [##_article_rep_category_##]
              [##_article_rep_simple_date_##]
              <s_article_rep_thumbnail>
                {/* <img
              alt="[##_article_rep_title_##]"
              src="//i1.daumcdn.net/thumb/C250x250/?fname=[##_article_rep_thumbnail_raw_url_##]"
            /> */}
                <img
                  alt="[##_article_rep_title_##]"
                  src="[##_article_rep_thumbnail_url_##]"
                />
              </s_article_rep_thumbnail>
            </div>
          </s_index_article_rep>
      </s_article_rep>

      <s_article_protected>
        <s_index_article_rep>
          [##_article_rep_title_##] [##_article_rep_link_##]
          [##_article_rep_category_##] [##_article_rep_simple_date_##]
        </s_index_article_rep>
      </s_article_protected>
    </>
  );
};

export default List;
