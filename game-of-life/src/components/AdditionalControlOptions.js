import React from 'react'
import { connect } from 'react-redux'

export const AdditionalControlOptions = ({ gridSquared, gridResolution }) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      gridSquared: state.gridReducer.gridSquared,
      gridResolution: state.gridReducer.gridResolution,
    };
}

export default connect(mapStateToProps)(AdditionalControlOptions)
