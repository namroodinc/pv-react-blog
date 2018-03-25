import React from "react";
import PropTypes from "prop-types";
import { Grid } from "material-ui";

import { Ratings, TrendingTopics } from "./Index";

class ContentWithSidebar extends React.Component {
  render() {
    const { showRatings, showTrending } = this.props;

    return (
      <div
        className="container"
      >

        <Grid
          container
          spacing={24}
        >

          <Grid
            item
            md={8}
            xs={12}
          >

            <div
              className="content"
            >

              <div
                className="content__wrapper"
              >
                {this.props.children}
              </div>

            </div>

          </Grid>

          <Grid
            item
            md={4}
            xs={12}
          >
            {showRatings &&
              <Ratings />
            }
            {showTrending &&
              <TrendingTopics />
            }
          </Grid>

        </Grid>

      </div>
    );
  }
}

ContentWithSidebar.defaultProps = {
  showRatings: true,
  showTrending: true
}

ContentWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  showRatings: PropTypes.bool,
  showTrending: PropTypes.bool
}

export default ContentWithSidebar;
