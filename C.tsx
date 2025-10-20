  useEffect(() => {

    const fetchCategoryAndSubCategory = async () => {
      try {
        if (blog.blogCategoryRef) {
          const resCat = await fetch(
            `${BASE_URL}/blog-category`
          );
          setBlogCategory(resCat.data);
        }

        if (blog.blogCategoryRef) {
          const resSubCat = await fetch(
            `${BASE_URL}/blog-subcategory`,
            { cache: "no-store" }
          );
          setBlogSubCategory(resSubCat.data);
        }
      } catch (error) {
        console.log("Failed to fetch category/subcategory", error);
      }
    };

    fetchCategoryAndSubCategory();
  }, [blog.blogCategoryRef, blog.blogSubCategoryRef]);