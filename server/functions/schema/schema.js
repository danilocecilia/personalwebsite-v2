const graphql = require('graphql')
const _ = require('lodash')

const Profile = require('../models/profile')
const Skill = require('../models/skill')
const Portfolio = require('../models/portfolio')
const SocialMedia = require('../models/socialMedia')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: GraphQLID },
    fullName: { type: GraphQLString },
    birthday: { type: GraphQLString },
    titleJob: { type: GraphQLString },
    email: { type: GraphQLString },
    shortSummary: { type: GraphQLString },
    summary: { type: GraphQLString },
    mobile: { type: GraphQLString },
    aboutHeader: { type: GraphQLID },
    aboutDescription: { type: GraphQLString },
    aboutPhoto: { type: GraphQLString },
    skillHeader: { type: GraphQLString },
    skillSummary: { type: GraphQLString },
  }),
})

const SkillType = new GraphQLObjectType({
  name: 'Skill',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    percent: { type: GraphQLInt },
  }),
})

const PortfolioType = new GraphQLObjectType({
  name: 'Portfolio',
  fields: () => ({
    id: { type: GraphQLID },
    company: { type: GraphQLString },
    image: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
})

const SocialMediaType = new GraphQLObjectType({
  name: 'Social',
  fields: () => ({
    name: { type: GraphQLString },
    link: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        return Profile.find({})
      },
    },
    skills: {
      type: new GraphQLList(SkillType),
      args: { category: { type: GraphQLString } },
      resolve(parent, args) {
        const { category } = args
        return Skill.find({ category })
      },
    },
    portfolios: {
      type: new GraphQLList(PortfolioType),
      resolve(parent, args) {
        return Portfolio.find({})
      },
    },
    socials: {
      type: new GraphQLList(SocialMediaType),
      resolve(parent, args) {
        return SocialMedia.find({})
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
