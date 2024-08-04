import { Card } from "antd";

const CardContainer = () => {
  return (
    <div className="container-content">
      <img src="https://assets-global.website-files.com/6240546a639324621fd71bf2/6240b410c4a96827e8cf6d7c_heading-magazine.svg" alt="" style={{ width: "100%" }} />
    </div>
  );
};

const CardCategories = () => {
  return (
    <div className="categories-content">
      <div className="category">Categories</div>
      <div className="choose-category">
        <div className="category-1">ALL</div>
        <div className="category-2">ART</div>
        <div className="category-3">STREET ART</div>
        <div className="category-4">SCULPTURES</div>
      </div>
    </div>
  );
};

const CardContent = () => {
  return (
    <div className="card-content">
      <Card>
        <Card.Grid>
          <div className="card-date">
            <p>Mar 28, 2024</p>
            <p className="card-category">ART</p>
          </div>
          <div className="card-post">
            <img src="src/assets/image/art1.jpg" alt="" style={{ objectFit: "cover", marginTop: "10px", width: "100%", height: "auto", maxHeight: "300px" }} />
            <h3>Hope die last</h3>
            <p>Lorem ipsum dolor sit amet 1consectetur adipisicing elit. Sed aliquam voluptate dignissimos laudantium dolorem ducimus rem nihil ipsum magni fugiat?</p>
          </div>
          <div className="card-author">
            <p style={{ fontWeight: "bold" }}>Text</p>
            <a href="#" style={{ color: "black", textDecoration: "underline" }}>
              Akbar Fauzan
            </a>
          </div>
        </Card.Grid>

        <Card.Grid>
          <div className="card-date">
            <p>Mar 28, 2024</p>
            <p className="card-category">STREET ART</p>
          </div>
          <div className="card-post">
            <img src="src/assets/image/street.jpg" alt="" style={{ objectFit: "cover", marginTop: "10px", width: "100%", height: "auto", maxHeight: "300px" }} />
            <h3>Hope die last</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam voluptate dignissimos laudantium dolorem ducimus rem nihil ipsum magni fugiat?</p>
          </div>
          <div className="card-author">
            <p style={{ fontWeight: "bold" }}>Text</p>
            <a href="#" style={{ color: "black", textDecoration: "underline" }}>
              Akbar Fauzan
            </a>
          </div>
        </Card.Grid>

        <Card.Grid>
          <div className="card-date">
            <p>Mar 28, 2024</p>
            <p className="card-category">SCULPTURES</p>
          </div>
          <div className="card-post">
            <img src="src/assets/image/sculptures.jpg" alt="" style={{ objectFit: "cover", marginTop: "10px", width: "100%", height: "auto", maxHeight: "300px" }} />
            <h3>Hope die last</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam voluptate dignissimos laudantium dolorem ducimus rem nihil ipsum magni fugiat?</p>
          </div>
          <div className="card-author">
            <p style={{ fontWeight: "bold" }}>Text</p>
            <a href="#" style={{ color: "black", textDecoration: "underline" }}>
              Akbar Fauzan
            </a>
          </div>
        </Card.Grid>
      </Card>
    </div>
  );
};

const CustomContent = () => {
  return (
    <main>
      <hr />
      <CardContainer />
      <CardCategories />
      <CardContent />
    </main>
  );
};

export default CustomContent;
