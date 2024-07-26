import { Component } from "react"

export function TopCharacterTableRow({name, skillset, votes, index}) {
  return (
    <>
      <tr className={index % 2 === 0 ? "light" : "dark"}>
        <td>{name}</td>
        <td>{skillset}</td>
        <td>{votes}</td>
      </tr>
    </>
  )
}

export class CharacterCards extends Component {
  render() {
    const { name, nickName, imgUrl, background } = this.props.charCard;
    return (
      <>
      <div className="card">
        <div className="card-titles">
          <h3>{name}</h3>
          <h4>{nickName}</h4>
        </div>
        <img src={imgUrl} alt="" />
        <p>{background}</p>
      </div>
      </>
    )
  }
}