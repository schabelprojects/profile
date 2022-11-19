import React from "react";
import "./style.css";

function ProfilePage() {
  return (
    <>
      <div className="wrapper">
        <div className="collapse">
          <input type="checkbox"  id="collapsible-head" />
          <label for="collapsible-head">Motivation</label>
          <div className="collapse-text">
            <h2>Motivation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              hic, earum exercitationem laboriosam esse culpa facere velit
              cumque vero perspiciatis maiores, perferendis, eum autem nulla id
              odio ullam laudantium a.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper2">
        <div className="collapse2">
          <input type="checkbox"  id="collapsible-head2" />
          <label for="collapsible-head2">Motivation</label>
          <div className="collapse-text2">
            <h2>Motivation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              hic, earum exercitationem laboriosam esse culpa facere velit
              cumque vero perspiciatis maiores, perferendis, eum autem nulla id
              odio ullam laudantium a.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper3">
        <div className="collapse3">
          <input type="checkbox"  id="collapsible-head3" />
          <label for="collapsible-head3">Motivation</label>
          <div className="collapse-text3">
            <h2>Motivation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              hic, earum exercitationem laboriosam esse culpa facere velit
              cumque vero perspiciatis maiores, perferendis, eum autem nulla id
              odio ullam laudantium a.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
