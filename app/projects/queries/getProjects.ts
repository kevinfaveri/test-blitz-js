import db, { FindManyProjectArgs } from "db"

type GetProjectsInput = {
  where?: FindManyProjectArgs["where"]
  orderBy?: FindManyProjectArgs["orderBy"]
  skip?: FindManyProjectArgs["skip"]
  first?: FindManyProjectArgs["first"]
  last?: FindManyProjectArgs["last"]
  after?: FindManyProjectArgs["after"]
  before?: FindManyProjectArgs["before"]
  // Only available if a model relationship exists
  // include?: FindManyProjectArgs['include']
}

export default async function getProjects({
  where,
  orderBy,
  skip,
  first,
  last,
  after,
  before,
}: GetProjectsInput) {
  const projects = await db.project.findMany({
    where,
    orderBy,
    skip,
    first,
    last,
    after,
    before,
  })

  return projects
}
