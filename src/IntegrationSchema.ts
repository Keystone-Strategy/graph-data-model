import Ajv from 'ajv';

// JSON Schema allows an object to contain properties that are not specified by
// the schema. This can be disabled with `additionalProperties: false`. Ajv then
// supports a `removeAdditional` option, directing it to remove any properties
// from an object which are not specified in the schema.
//
// We need to allow additional properties in practice because:
//
// 1) we already have a lot of integrations throwing all sorts of custom
//    properties on entities and
// 2) when an entity has multiple classes, each schema needs to allow for
//    properties from other schemas.
/**
 * An Ajv schema for integration graph objects, useful for validating that
 * entities conform to minimum requirements.
 */
export const IntegrationSchema = new Ajv({ unknownFormats: 'ignore' });

// Schema Imports : generated by tools/generate-schema-imports.sh
import Workload from "./schemas/Workload.json";
IntegrationSchema.addSchema(Workload);
import Weakness from "./schemas/Weakness.json";
IntegrationSchema.addSchema(Weakness);
import Vulnerability from "./schemas/Vulnerability.json";
IntegrationSchema.addSchema(Vulnerability);
import Vendor from "./schemas/Vendor.json";
IntegrationSchema.addSchema(Vendor);
import Vault from "./schemas/Vault.json";
IntegrationSchema.addSchema(Vault);
import UserGroup from "./schemas/UserGroup.json";
IntegrationSchema.addSchema(UserGroup);
import User from "./schemas/User.json";
IntegrationSchema.addSchema(User);
import Training from "./schemas/Training.json";
IntegrationSchema.addSchema(Training);
import Team from "./schemas/Team.json";
IntegrationSchema.addSchema(Team);
import Task from "./schemas/Task.json";
IntegrationSchema.addSchema(Task);
import Subscription from "./schemas/Subscription.json";
IntegrationSchema.addSchema(Subscription);
import Standard from "./schemas/Standard.json";
IntegrationSchema.addSchema(Standard);
import Site from "./schemas/Site.json";
IntegrationSchema.addSchema(Site);
import Service from "./schemas/Service.json";
IntegrationSchema.addSchema(Service);
import Section from "./schemas/Section.json";
IntegrationSchema.addSchema(Section);
import Scanner from "./schemas/Scanner.json";
IntegrationSchema.addSchema(Scanner);
import Ruleset from "./schemas/Ruleset.json";
IntegrationSchema.addSchema(Ruleset);
import Rule from "./schemas/Rule.json";
IntegrationSchema.addSchema(Rule);
import Root from "./schemas/Root.json";
IntegrationSchema.addSchema(Root);
import Risk from "./schemas/Risk.json";
IntegrationSchema.addSchema(Risk);
import Review from "./schemas/Review.json";
IntegrationSchema.addSchema(Review);
import Resource from "./schemas/Resource.json";
IntegrationSchema.addSchema(Resource);
import Requirement from "./schemas/Requirement.json";
IntegrationSchema.addSchema(Requirement);
import Repository from "./schemas/Repository.json";
IntegrationSchema.addSchema(Repository);
import RecordEntity from "./schemas/RecordEntity.json";
IntegrationSchema.addSchema(RecordEntity);
import Record from "./schemas/Record.json";
IntegrationSchema.addSchema(Record);
import Queue from "./schemas/Queue.json";
IntegrationSchema.addSchema(Queue);
import Project from "./schemas/Project.json";
IntegrationSchema.addSchema(Project);
import Program from "./schemas/Program.json";
IntegrationSchema.addSchema(Program);
import Product from "./schemas/Product.json";
IntegrationSchema.addSchema(Product);
import Process from "./schemas/Process.json";
IntegrationSchema.addSchema(Process);
import Procedure from "./schemas/Procedure.json";
IntegrationSchema.addSchema(Procedure);
import Policy from "./schemas/Policy.json";
IntegrationSchema.addSchema(Policy);
import Person from "./schemas/Person.json";
IntegrationSchema.addSchema(Person);
import PasswordPolicy from "./schemas/PasswordPolicy.json";
IntegrationSchema.addSchema(PasswordPolicy);
import PR from "./schemas/PR.json";
IntegrationSchema.addSchema(PR);
import Organization from "./schemas/Organization.json";
IntegrationSchema.addSchema(Organization);
import NetworkInterface from "./schemas/NetworkInterface.json";
IntegrationSchema.addSchema(NetworkInterface);
import NetworkEndpoint from "./schemas/NetworkEndpoint.json";
IntegrationSchema.addSchema(NetworkEndpoint);
import Network from "./schemas/Network.json";
IntegrationSchema.addSchema(Network);
import Module from "./schemas/Module.json";
IntegrationSchema.addSchema(Module);
import Logs from "./schemas/Logs.json";
IntegrationSchema.addSchema(Logs);
import Key from "./schemas/Key.json";
IntegrationSchema.addSchema(Key);
import IpAddress from "./schemas/IpAddress.json";
IntegrationSchema.addSchema(IpAddress);
import Internet from "./schemas/Internet.json";
IntegrationSchema.addSchema(Internet);
import Incident from "./schemas/Incident.json";
IntegrationSchema.addSchema(Incident);
import Image from "./schemas/Image.json";
IntegrationSchema.addSchema(Image);
import HostAgent from "./schemas/HostAgent.json";
IntegrationSchema.addSchema(HostAgent);
import Host from "./schemas/Host.json";
IntegrationSchema.addSchema(Host);
import Group from "./schemas/Group.json";
IntegrationSchema.addSchema(Group);
import GraphObject from "./schemas/GraphObject.json";
IntegrationSchema.addSchema(GraphObject);
import Gateway from "./schemas/Gateway.json";
IntegrationSchema.addSchema(Gateway);
import Function from "./schemas/Function.json";
IntegrationSchema.addSchema(Function);
import Framework from "./schemas/Framework.json";
IntegrationSchema.addSchema(Framework);
import Firewall from "./schemas/Firewall.json";
IntegrationSchema.addSchema(Firewall);
import Finding from "./schemas/Finding.json";
IntegrationSchema.addSchema(Finding);
import Entity from "./schemas/Entity.json";
IntegrationSchema.addSchema(Entity);
import DomainZone from "./schemas/DomainZone.json";
IntegrationSchema.addSchema(DomainZone);
import DomainRecord from "./schemas/DomainRecord.json";
IntegrationSchema.addSchema(DomainRecord);
import Domain from "./schemas/Domain.json";
IntegrationSchema.addSchema(Domain);
import Document from "./schemas/Document.json";
IntegrationSchema.addSchema(Document);
import Disk from "./schemas/Disk.json";
IntegrationSchema.addSchema(Disk);
import Directory from "./schemas/Directory.json";
IntegrationSchema.addSchema(Directory);
import Device from "./schemas/Device.json";
IntegrationSchema.addSchema(Device);
import Deployment from "./schemas/Deployment.json";
IntegrationSchema.addSchema(Deployment);
import Database from "./schemas/Database.json";
IntegrationSchema.addSchema(Database);
import DataStore from "./schemas/DataStore.json";
IntegrationSchema.addSchema(DataStore);
import DataObject from "./schemas/DataObject.json";
IntegrationSchema.addSchema(DataObject);
import CryptoKey from "./schemas/CryptoKey.json";
IntegrationSchema.addSchema(CryptoKey);
import ControlPolicy from "./schemas/ControlPolicy.json";
IntegrationSchema.addSchema(ControlPolicy);
import Control from "./schemas/Control.json";
IntegrationSchema.addSchema(Control);
import Container from "./schemas/Container.json";
IntegrationSchema.addSchema(Container);
import Configuration from "./schemas/Configuration.json";
IntegrationSchema.addSchema(Configuration);
import CodeReview from "./schemas/CodeReview.json";
IntegrationSchema.addSchema(CodeReview);
import CodeRepo from "./schemas/CodeRepo.json";
IntegrationSchema.addSchema(CodeRepo);
import CodeModule from "./schemas/CodeModule.json";
IntegrationSchema.addSchema(CodeModule);
import CodeDeploy from "./schemas/CodeDeploy.json";
IntegrationSchema.addSchema(CodeDeploy);
import CodeCommit from "./schemas/CodeCommit.json";
IntegrationSchema.addSchema(CodeCommit);
import Cluster from "./schemas/Cluster.json";
IntegrationSchema.addSchema(Cluster);
import Channel from "./schemas/Channel.json";
IntegrationSchema.addSchema(Channel);
import Certificate from "./schemas/Certificate.json";
IntegrationSchema.addSchema(Certificate);
import Backup from "./schemas/Backup.json";
IntegrationSchema.addSchema(Backup);
import Attacker from "./schemas/Attacker.json";
IntegrationSchema.addSchema(Attacker);
import Assessment from "./schemas/Assessment.json";
IntegrationSchema.addSchema(Assessment);
import ApplicationEndpoint from "./schemas/ApplicationEndpoint.json";
IntegrationSchema.addSchema(ApplicationEndpoint);
import Application from "./schemas/Application.json";
IntegrationSchema.addSchema(Application);
import Account from "./schemas/Account.json";
IntegrationSchema.addSchema(Account);
import AccessRole from "./schemas/AccessRole.json";
IntegrationSchema.addSchema(AccessRole);
import AccessPolicy from "./schemas/AccessPolicy.json";
IntegrationSchema.addSchema(AccessPolicy);
import AccessKey from "./schemas/AccessKey.json";
IntegrationSchema.addSchema(AccessKey);
